from flask import Flask, render_template, redirect, url_for, request, session

from models import db, User, Product, Order
from werkzeug.security import generate_password_hash, check_password_hash

import os

app = Flask(__name__)
# لازم تكون القيم دي من Google Console
os.environ['OAUTHLIB_INSECURE_TRANSPORT'] = '1'  # يسمح باستخدام HTTP بدل HTTPS للتجربة

app.secret_key = "YOUR_SECRET_KEY"

app.secret_key = 'SECRET_KEY'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db.init_app(app)

def create_initial_db():
    """ينشئ قاعدة البيانات والمنتج الأولي إذا لم يكونا موجودين."""
    with app.app_context():
        db.create_all()
        # إضافة منتج واحد لضمان عدم حدوث خطأ
        if not Product.query.first():
            p = Product(
                name_ar="كيت نبتة",
                name_en="Nabta Kit",
                description_ar="كيت تعليمي للأطفال من نبضة.",
                description_en="Educational kit for kids from Nabda.",
                price=420.00
            )
            db.session.add(p)
            db.session.commit()


# ==== ROUTES ====

@app.route('/')
def index():
    return redirect(url_for('index_ar'))  # أو 'index_en' حسب اللغة اللي تحب تبدأ بيها


@app.route('/ar')
def index_ar():
    product = Product.query.first()
    return render_template('index_ar.html', product=product)

@app.route('/en')
def index_en():
    product = Product.query.first()
    return render_template('index_en.html', product=product)










# ==== INIT DB ====

    return redirect(url_for("cart"))

@app.route('/product/<int:product_id>')
def product_page(product_id):
    product = Product.query.get_or_404(product_id)
    return render_template('product_details.html', product=product)



@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/courses')
def courses():
    return render_template('courses.html')

@app.route('/team')
def team():
    return render_template('team.html')

@app.route('/testimonial')
def testimonial():
    return render_template('testimonial.html')



@app.route('/contact')
def contact():
    return render_template('contact.html')

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        if not Product.query.first():
            p = Product(
                name_ar="كيت نبتة",
                name_en="Nabta Kit",
                description_ar="كيت تعليمي للأطفال من نبضة.",
                description_en="Educational kit for kids from Nabda.",
                price=199.99
            )
            db.session.add(p)
            db.session.commit()
    app.run(debug=True)
