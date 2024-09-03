# import dependencies 
from flask import Flask, render_template, request, redirect, url_for, flash
from flask_mail import Mail, Message

# Create environment variables to hide password
import os
from dotenv import load_dotenv
load_dotenv()



# establish current instance of flask 
app = Flask(__name__)

# configure mail functionality
app.config['MAIL_SERVER'] = 'smtp.gmail.com' 
app.config['MAIL_PORT'] = 587
app.config['MAIL_USE_TLS'] = True # encrypt 
app.config['MAIL_USERNAME'] = os.environ.get('MAIL_USERNAME')
app.config['MAIL_PASSWORD'] = os.environ.get('EMAIL_PASSWORD')
app.secret_key = os.environ.get('SECRET_KEY')

mail = Mail(app)

# have flask app return index.html by default
@app.route('/')
def index():
    return render_template('index.html')

# get info from submitted form when button pushed
@app.route('/send-email', methods=['POST'])
def send_email():
    name = request.form['name']
    sender_email = request.form['sender-email']
    message = request.form['message']

    # create email message
    msg = Message(subject=f"Portfolio website Submission from {name}",
                  sender= os.environ.get('MAIL_USERNAME'),
                  recipients=['atticus.ezis@gmail.com'])  
    msg.body = f"Name: {name}\nEmail: {sender_email}\n\nMessage:\n{message}"

    # send message and confirmation response 
    try:
        mail.send(msg)
        flash("Your Email has been sent, you'll hear from me soon!", 'success')
    except Exception as e:
        flash(f'An error occured while sending the email: {str(e)}, please use the gmail button instead', 'danger')

    return redirect(url_for('index') + '#contact-section')

# run app in developer mode so assign debug to True
if __name__ == '__main__':
    app.run(debug=True)