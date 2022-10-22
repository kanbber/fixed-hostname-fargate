import socket

from flask import Flask

app = Flask(__name__)


@app.route('/')
def hello_world():
    hostname = socket.gethostname()
    return f'Hello {hostname} !!!'

if __name__ == '__main__':
    app.run(host='0.0.0.0')
