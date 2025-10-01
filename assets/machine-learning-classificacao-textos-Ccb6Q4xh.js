const e=`# Machine Learning for Text Classification

Text classification is one of the most practical applications of machine learning. Let's implement a classifier using Python and scikit-learn.

## Data Preparation

\`\`\`python
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
from sklearn.metrics import classification_report

# Sample data
texts = ["This product is excellent", "Terrible experience", "Highly recommend"]
labels = ["positive", "negative", "positive"]

# Train/test split
X_train, X_test, y_train, y_test = train_test_split(texts, labels, test_size=0.2)
\`\`\`

## ML Pipeline

\`\`\`python
# Complete pipeline
pipeline = Pipeline([
    ('tfidf', TfidfVectorizer(stop_words='english', lowercase=True)),
    ('classifier', MultinomialNB())
])

# Training
pipeline.fit(X_train, y_train)

# Predictions
predictions = pipeline.predict(X_test)

# Evaluation
print(classification_report(y_test, predictions))
\`\`\`

## Optimization

To improve performance, use \`GridSearchCV\` to find the best hyperparameters!

Machine learning makes sentiment analysis accessible to everyone.`;export{e as default};
