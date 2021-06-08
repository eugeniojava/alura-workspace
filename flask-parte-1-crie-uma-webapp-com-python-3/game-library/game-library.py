from flask import Flask, render_template, request, redirect

app = Flask(__name__)


class Game:
    def __init__(self, name, category, console):
        self.name = name
        self.category = category
        self.console = console


game1 = Game('League of Legends', 'MOBA', 'PC')
game2 = Game('Counter-Strike: Global Offensive', 'FPS', 'PC')
listOfGames = [game1, game2]


@app.route('/')
def index():
    return render_template('list.html', title='Game Library', games=listOfGames)


@app.route('/new')
def new():
    return render_template('new.html', title='New game')


@app.route('/create', methods=['POST'])
def create():
    name = request.form['name']
    category = request.form['category']
    console = request.form['console']
    game = Game(name, category, console)
    listOfGames.append(game)
    return redirect('/')


app.run(host='0.0.0.0', port=8080, debug=True)
