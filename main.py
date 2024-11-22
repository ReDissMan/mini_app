api_key = '7558535572:AAH1D9vLDBGSGDRyk5irApllcY8KFJrNpZs'

from flask import Flask, request, jsonify

app = Flask(__name__)

# Маршрут для обработки данных от клиента
@app.route('/webhook', methods=['POST'])
def webhook():
    data = request.json
    print(f"Получены данные: {data}")

    # Ответ на запрос
    return jsonify({"status": "success"}), 200

if __name__ == '__main__':
    app.run(ssl_context=('cert.pem', 'key.pem'), port=8443)