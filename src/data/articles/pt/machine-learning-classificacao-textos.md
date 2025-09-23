# Machine Learning para Classificação de Textos

A classificação de textos é uma das aplicações mais práticas do machine learning. Vamos implementar um classificador usando Python e scikit-learn.

## Preparação dos Dados

```python
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.naive_bayes import MultinomialNB
from sklearn.pipeline import Pipeline
from sklearn.metrics import classification_report

# Dados de exemplo
textos = ["Este produto é excelente", "Terrível experiência", "Recomendo muito"]
labels = ["positivo", "negativo", "positivo"]

# Divisão treino/teste
X_train, X_test, y_train, y_test = train_test_split(textos, labels, test_size=0.2)
```

## Pipeline de ML

```python
# Pipeline completo
pipeline = Pipeline([
    ('tfidf', TfidfVectorizer(stop_words='english', lowercase=True)),
    ('classifier', MultinomialNB())
])

# Treinamento
pipeline.fit(X_train, y_train)

# Predições
predictions = pipeline.predict(X_test)

# Avaliação
print(classification_report(y_test, predictions))
```

## Otimização

Para melhorar a performance, use `GridSearchCV` para encontrar os melhores hiperparâmetros!

Machine learning torna a análise de sentimentos acessível a todos.