from flask import Flask
from flask_cors import CORS
from pymongo import MongoClient
from flask import request

client = MongoClient("mongodb://localhost:27017")

# db = client.flask_mongodb_integration
db = client["eciliptiq"]

peopleResumeData = db.peopleResumeData

app = Flask(__name__)
CORS(app, origins=['http://localhost:5173'])

@app.route("/")
def homePage():
    return "This is Home page."

@app.route("/api/add/userResume", methods=['POST'])
def mongodbDataPusher():
    data = request.get_json()
    # peopleResumeData.insert_one({
    #     "firstName": request.args.get("fn"),
    #     "lastName": request.args.get("ln"),
    #     "rollNo": request.args.get("rn"),
    #     "place": request.args.get("pl")
    # })
    return 1
    print(data)
    
if __name__ == '__main__':
    app.run(debug=True)