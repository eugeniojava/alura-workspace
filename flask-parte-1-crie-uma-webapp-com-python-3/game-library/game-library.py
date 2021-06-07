from flask import Flask, render_template

app = Flask(__name__)


@app.route('/hello')
def hello():
    return render_template('list.html')


app.run(host='0.0.0.0', port=8080)
