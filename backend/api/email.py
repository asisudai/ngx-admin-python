import smtplib
from email import message
from flask import current_app


def send_password_recovery_email(to_addr, full_name, recovery_token):
    subject = '%s - password recovery' % current_app.config['APP_NAME']
    password_recovery_url = '%s/#/auth/reset-password?reset_password_token=%s`' \
                            % (current_app.config['FRONT_END_DOMAIN'], recovery_token)
    body = 'Hello %s,' \
           '\nWe have received password reset request. To do this, please proceed at %s\n' \
           'If it wasn\'t you, take no action or contact support.\n\n' \
           'Thank you,' \
           '\nSupport team.' % (full_name, password_recovery_url)

    __get_email_client().send_email(to_addr, subject, body)


def __get_email_client():
    return FakeEmailClient() if current_app.config['SMTP_SETTINGS']['DEBUG'] else SMTPEmailClient()


class BaseEmailClient:

    def send_email(self, to_addr='', subject='', body=''):
        pass


class FakeEmailClient(BaseEmailClient):

    def send_email(self, to_addr='', subject='', body=''):
        print(f"Sending email\nFrom: {current_app.config['SMTP_SETTINGS']['FROM']}\nTo: {to_addr}")
        print(f"Subject: {subject}")
        print('Body:\n')
        print(body)


class SMTPEmailClient(BaseEmailClient):

    def send_email(self, to_addr='', subject='', body=''):
        from_addr = current_app.config['SMTP_SETTINGS']['FROM']

        msg = message.Message()
        msg.add_header('from', from_addr)
        msg.add_header('to', to_addr)
        msg.add_header('subject', subject)
        msg.set_payload(body)

        server = smtplib.SMTP(current_app.config['SMTP_SETTINGS']['HOST'], current_app.config['SMTP_SETTINGS']['PORT'])
        server.login(from_addr, current_app.config['SMTP_SETTINGS']['PASSWORD'])
        server.send_message(msg, from_addr=from_addr, to_addrs=[to_addr])
