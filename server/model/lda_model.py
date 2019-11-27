import gensim
from gensim.utils import simple_preprocess
from gensim.parsing.preprocessing import STOPWORDS
from gensim import corpora, models
from gensim.test.utils import datapath

import pandas as pd
import pickle

import nltk
from nltk.stem import PorterStemmer
from nltk.stem import WordNetLemmatizer
from nltk.tokenize import sent_tokenize, word_tokenize
from nltk.corpus import stopwords

#we need to download {wordnet,stopwords,punkt }from nltk
# nltk.download('punkt')
# nltk.download('stopwords')
# nltk.download('wordnet')

from gensim.test.utils import common_texts
from gensim.corpora.dictionary import Dictionary

porter = PorterStemmer()
lemmatizer = WordNetLemmatizer()
stopWords = set(stopwords.words("english"))

#only need to run the setup once

def main(text):
    ldamodel, dictionaryLAD = modelSetUp()
    totalScore, topics = getTopic(text, ldamodel, dictionaryLAD)
    print(totalScore, topics)
    return totalScore,topics

def getTopic(text, ldamodel, dictionaryLAD):
    bow_vector = dictionaryLAD.doc2bow(preProcessText(text))

    finalTops = []
    count = 0
    for index, score in sorted(ldamodel[bow_vector], key=lambda tup: -1*tup[1]):
        if count ==1 :
            topics = ldamodel.print_topic(index, 5).split(" + ")
            for topic in topics:
                temp = topic.split("*")
                finalTops.append([temp[0], temp[-1].replace('"', "")])
            return (score, finalTops)
        count+=1

    return topics

def modelSetUp():
    ldamodel = gensim.models.ldamodel.LdaModel.load("./model/enwiki_2017_08_20_lda.model")
    dictionaryLAD = load_obj()

    return ldamodel, dictionaryLAD

def setup():
    processed_data = pd.read_csv("./model/blogtext_processed.csv", index_col = 0, header = None)
    processed_data = processed_data.iloc[:,0]
    for index,row in processed_data.iteritems():
        processed_data[index] = row[1:-1].split(',')

    dictionary = gensim.corpora.Dictionary(processed_data)

    dictionary.filter_extremes(no_below=15, no_above=0.5)

    bow_corpus = [dictionary.doc2bow(doc) for doc in processed_docs]

    tfidf = models.TfidfModel(bow_corpus)
    corpus_tfidf = tfidf[bow_corpus]

    lda_model_tfidf = gensim.models.LdaMulticore(corpus_tfidf, num_topics=10, id2word=dictionary, passes=20)

    # Save model to disk.
    temp_file = datapath("model")
    lda_model_tfidf.save(temp_file)

    return

def load_obj():
    with open('./model/enwiki_2017_08_20_trimmed.dict', 'rb') as f:
        return pickle.load(f)


def preProcessText(sentence):
    token_words=word_tokenize(sentence)
    token_words
    stem_sentence=[]
    for word in token_words:
        if word not in stopWords and len(word) > 1:
            if any(ch.isdigit() for ch in word):
                continue

            if '+' in word:
                continue

            #blanks
            word = word.replace('"', '')
            word = word.replace("=","")
            word = word.replace("'", "")
            word = word.replace("*", "")
            word = word.replace("`", "")
            word = word.replace(".", "")
            word = word.replace(">", "")
            word = word.replace("<", "")
            word = word.replace("(", "")
            word = word.replace(")", "")
            word = word.replace("{", "")
            word = word.replace("}", "")
            word = word.replace("#", "")
            word = word.replace("$", "")
            word = word.replace("!", "")
            word = word.replace("@", "")
            word = word.replace("^", "")
            word = word.replace("*", "")
            word = word.replace("~", "")
            word = word.replace("`", "")

            #spaces
            word = word.replace("-", " ")
            word = word.replace("/", " ")
            word = word.replace('&', ' ')

            formatted_str = porter.stem(lemmatizer.lemmatize(word)).strip()

            if formatted_str is 'urllink':
                continue

            if len(formatted_str) > 1:
                stem_sentence.append(formatted_str)

    if len(stem_sentence) < 2:
        return []
    return stem_sentence

# main('Hey! What are you doing this weekend? Oh, I\'m going camping outdoors! Camping is fun. I want to see nature: trees, leaves, and grass are all great things. I also want to see lakes, bugs, and study plants!')
