---
id: '3'
title:
  pt: 'Machine Learning na Prática: Classificação de Textos'
  en: 'Machine Learning in Practice: Text Classification'
summary:
  pt: 'Um guia prático para implementar classificação de textos usando scikit-learn e técnicas de NLP.'
  en: 'A practical guide to implement text classification using scikit-learn and NLP techniques.'
date: '2024-03-12'
tags: ['Machine Learning', 'NLP', 'Python', 'scikit-learn']
slug: 'machine-learning-classificacao-textos'
---

# Machine Learning na Prática: Classificação de Textos

A classificação de textos é uma das aplicações mais comuns de Machine Learning. Vamos explorar como implementar um classificador eficiente.

## Preparação dos Dados

```python
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split

# Dados de exemplo
textos = ["Este filme é incrível", "Não gostei do serviço", ...]
labels = ["positivo", "negativo", ...]

# Divisão treino/teste
X_train, X_test, y_train, y_test = train_test_split(
    textos, labels, test_size=0.2, random_state=42
)
```

## Criando o Pipeline

```python
# Pipeline com vetorização e classificador
pipeline = Pipeline([
    ('tfidf', TfidfVectorizer(max_features=5000, stop_words='english')),
    ('classifier', MultinomialNB())
])

# Treinamento
pipeline.fit(X_train, y_train)

# Avaliação
accuracy = pipeline.score(X_test, y_test)
print(f'Acurácia: {accuracy:.2f}')
```

## Otimização

Use GridSearchCV para encontrar os melhores parâmetros!

---

# Machine Learning in Practice: Text Classification

Text classification is one of the most common Machine Learning applications. Let's explore how to implement an efficient classifier.

## Data Preparation

```python
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
from sklearn.model_selection import train_test_split

# Example data
texts = ["This movie is amazing", "I didn't like the service", ...]
labels = ["positive", "negative", ...]

# Train/test split
X_train, X_test, y_train, y_test = train_test_split(
    texts, labels, test_size=0.2, random_state=42
)
```

## Creating the Pipeline

```python
# Pipeline with vectorization and classifier
pipeline = Pipeline([
    ('tfidf', TfidfVectorizer(max_features=5000, stop_words='english')),
    ('classifier', MultinomialNB())
])

# Training
pipeline.fit(X_train, y_train)

# Evaluation
accuracy = pipeline.score(X_test, y_test)
print(f'Accuracy: {accuracy:.2f}')
```

## Optimization

Use GridSearchCV to find the best parameters!