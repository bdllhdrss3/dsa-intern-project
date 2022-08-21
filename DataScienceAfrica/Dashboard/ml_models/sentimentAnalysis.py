import pickle
from pathlib import Path

dir = Path(__file__).resolve().parent
loaded_vectorizer = pickle.load(open(dir.joinpath('vectorizer.sav'), 'rb'))
loaded_model = pickle.load(open(dir.joinpath('finalized_model.sav'), 'rb'))

def predict(text):

    textInput = [text]
    data = loaded_model.predict(loaded_vectorizer.transform(textInput))
    data = data[0]
    key = {
        '0': 'Not Fake',
        '1': 'Fake',
        '2': 'Partially Fake',
        '3': 'Others'
    }
    return { 'sentence': text,'analysis': key[str(int(data))]}
#ml model