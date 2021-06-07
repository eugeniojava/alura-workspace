from flask import Flask, render_template

app = Flask(__name__)


class Game:
    def __init__(self, name, category, console):
        self.name = name
        self.category = category
        self.console = console


@app.route('/hello')
def hello():
    game1 = Game('League of Legends', 'MOBA', 'PC')
    game2 = Game('Counter-Strike: Global Offensive', 'FPS', 'PC')
    listOfGames = [game1, game2]
    return render_template('list.html', title='Game Library', games=listOfGames)


app.run(host='0.0.0.0', port=8080)
