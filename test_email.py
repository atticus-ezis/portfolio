import smtplib
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()



# Get the email credentials from environment variables
EMAIL_ADDRESS = os.environ.get('MAIL_USERNAME')
EMAIL_PASSWORD = os.environ.get('EMAIL_PASSWORD')

# Test SMTP connection
try:
    with smtplib.SMTP('smtp.gmail.com', 587) as smtp:
        smtp.ehlo()  # Identify ourselves to the SMTP server
        smtp.starttls()  # Secure the connection with TLS
        smtp.ehlo()  # Re-identify as an encrypted connection
        smtp.login(EMAIL_ADDRESS, EMAIL_PASSWORD)  # Login to the SMTP server
        print("Successfully connected to the Gmail SMTP server!")
except smtplib.SMTPAuthenticationError as e:
    print(f"Failed to authenticate: {e}")
except Exception as e:
    print(f"An error occurred: {e}")

    
print(f"EMAIL_ADDRESS: {EMAIL_ADDRESS}")
print(f"EMAIL_PASSWORD: {EMAIL_PASSWORD}")