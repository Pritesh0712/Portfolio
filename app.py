from flask import Flask, url_for, render_template, redirect, request, flash, session, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(24)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:Pritesh%400712@localhost/portfolio'
app.config['SQLALCHEMY_TRACK_MODIFICATION'] = False
db = SQLAlchemy(app)

class Contact(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    email = db.Column(db.String(100), nullable=False)
    subject = db.Column(db.String(200), nullable=False)
    message = db.Column(db.Text, nullable=False)

with app.app_context():
    db.create_all()

@app.route('/')
def home():
    return render_template('base.html')

@app.route('/download-resume')
def download_resume():
    resume_folder = os.path.join(app.root_path, 'static', 'resumes')
    return send_from_directory(directory= resume_folder, path='resume.pdf',as_attachment= True)
    

@app.route('/about')
def about():
    return redirect('/#about')
    
@app.route('/projects')
def projects():
    return redirect('/#projects')
    
@app.route('/skills')
def skills():
    return redirect('/#skills')
    
@app.route('/certificates')
def certificates():
    return redirect('/#certificates')
    
@app.route('/contact')
def contact():
    return redirect('/#contact')
    
@app.route('/submit_contact', methods =['POST'])
def submit_contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        subject = request.form['subject']
        message = request.form['message']

        new_contact = Contact(name=name, email=email, subject=subject, message=message)
        db.session.add(new_contact)
        db.session.commit()

        flash('Your message has been sent successfully!','success')
        return redirect(url_for('home'))

@app.route('/view_contacts')
def view_contacts():
    contacts = Contact.query.all()
    return render_template('view_contacts.html', contacts=contacts)

if __name__ == '__main__':
    app.run(debug=True)