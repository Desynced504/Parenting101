from bardapi import Bard
from flask import Flask, request, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)
TOKEN = 'xxxxxxx' #TODO Enter Token Here
bard = Bard(token=TOKEN)
bard_response = "Sorry, I am currently unavailable, please come back later!"


@app.route('/receive-data', methods=['POST'])
def receive_data():
    global bard_response

    data_from_frontend = request.json.get('data') # Accessing data sent from frontend

    image = None
    bard_response = generate_response(data_from_frontend, image)['content']
    print("\n ------- \n", bard_response)
    return jsonify({'result': bard_response})



@app.route('/get-data')
def get_data():
    response = bard_response

    # Return the variable as JSON
    return jsonify({'data': response})


def generate_response(text, image):
    image = image
    answer = bard.get_answer(text)
    print(answer)
    print("\n\n\n")
    return answer


if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
