const a=[{id:"1",title:{pt:"Introdução à Análise de Dados com Python",en:"Introduction to Data Analysis with Python"},summary:{pt:"Descubra como começar sua jornada na análise de dados usando Python e suas principais bibliotecas.",en:"Discover how to start your data analysis journey using Python and its main libraries."},content:{pt:`# Introdução à Análise de Dados com Python

A análise de dados se tornou uma das habilidades mais valiosas no mundo moderno. Python, com sua sintaxe clara e vasto ecossistema de bibliotecas, é a escolha ideal para começar.

## Principais Bibliotecas

### NumPy
NumPy é fundamental para computação científica em Python, oferecendo suporte para arrays multidimensionais.

### Pandas
Pandas simplifica a manipulação e análise de dados estruturados.

### Matplotlib e Seaborn
Para visualização de dados elegante e informativa.

## Primeiros Passos

\`\`\`python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Carregando dados
df = pd.read_csv('dados.csv')
print(df.head())
\`\`\`

A jornada da análise de dados é fascinante e repleta de descobertas!`,en:`# Introduction to Data Analysis with Python

Data analysis has become one of the most valuable skills in the modern world. Python, with its clear syntax and vast ecosystem of libraries, is the ideal choice to get started.

## Main Libraries

### NumPy
NumPy is fundamental for scientific computing in Python, offering support for multidimensional arrays.

### Pandas
Pandas simplifies structured data manipulation and analysis.

### Matplotlib and Seaborn
For elegant and informative data visualization.

## First Steps

\`\`\`python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Loading data
df = pd.read_csv('data.csv')
print(df.head())
\`\`\`

The data analysis journey is fascinating and full of discoveries!`},date:"2024-01-15",tags:["Python","Data Analysis","Tutorial"],slug:"introducao-analise-dados-python"},{id:"2",title:{pt:"Criando Dashboards Interativos com Streamlit",en:"Creating Interactive Dashboards with Streamlit"},summary:{pt:"Aprenda a criar dashboards web interativos de forma simples e rápida usando Streamlit.",en:"Learn to create interactive web dashboards simply and quickly using Streamlit."},content:{pt:`# Criando Dashboards Interativos com Streamlit

Streamlit revolucionou a forma como criamos aplicações web para ciência de dados. Com apenas algumas linhas de código, você pode transformar seus scripts Python em aplicações interativas.

## Por que Streamlit?

- **Simplicidade**: Sem necessidade de HTML, CSS ou JavaScript
- **Rapidez**: Deploy em minutos
- **Integração**: Funciona perfeitamente com bibliotecas de dados

## Exemplo Prático

\`\`\`python
import streamlit as st
import pandas as pd
import plotly.express as px

st.title('Meu Dashboard de Vendas')

# Upload de arquivo
uploaded_file = st.file_uploader("Escolha um CSV", type="csv")

if uploaded_file:
    df = pd.read_csv(uploaded_file)
    
    # Sidebar com filtros
    categoria = st.sidebar.selectbox('Categoria', df['categoria'].unique())
    
    # Filtrar dados
    df_filtrado = df[df['categoria'] == categoria]
    
    # Gráfico
    fig = px.bar(df_filtrado, x='produto', y='vendas')
    st.plotly_chart(fig)
\`\`\`

## Deployment

O Streamlit Cloud torna o deployment gratuito e sem complicações!`,en:`# Creating Interactive Dashboards with Streamlit

Streamlit has revolutionized how we create web applications for data science. With just a few lines of code, you can transform your Python scripts into interactive applications.

## Why Streamlit?

- **Simplicity**: No need for HTML, CSS or JavaScript
- **Speed**: Deploy in minutes
- **Integration**: Works perfectly with data libraries

## Practical Example

\`\`\`python
import streamlit as st
import pandas as pd
import plotly.express as px

st.title('My Sales Dashboard')

# File upload
uploaded_file = st.file_uploader("Choose a CSV", type="csv")

if uploaded_file:
    df = pd.read_csv(uploaded_file)
    
    # Sidebar with filters
    category = st.sidebar.selectbox('Category', df['category'].unique())
    
    # Filter data
    filtered_df = df[df['category'] == category]
    
    # Chart
    fig = px.bar(filtered_df, x='product', y='sales')
    st.plotly_chart(fig)
\`\`\`

## Deployment

Streamlit Cloud makes deployment free and hassle-free!`},date:"2024-02-08",tags:["Streamlit","Dashboard","Python","Web App"],slug:"dashboards-interativos-streamlit"},{id:"3",title:{pt:"Machine Learning na Prática: Classificação de Textos",en:"Machine Learning in Practice: Text Classification"},summary:{pt:"Um guia prático para implementar classificação de textos usando scikit-learn e técnicas de NLP.",en:"A practical guide to implement text classification using scikit-learn and NLP techniques."},content:{pt:`# Machine Learning na Prática: Classificação de Textos

A classificação de textos é uma das aplicações mais comuns de Machine Learning. Vamos explorar como implementar um classificador eficiente.

## Preparação dos Dados

\`\`\`python
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
\`\`\`

## Criando o Pipeline

\`\`\`python
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
\`\`\`

## Otimização

Use GridSearchCV para encontrar os melhores parâmetros!`,en:`# Machine Learning in Practice: Text Classification

Text classification is one of the most common Machine Learning applications. Let's explore how to implement an efficient classifier.

## Data Preparation

\`\`\`python
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
\`\`\`

## Creating the Pipeline

\`\`\`python
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
\`\`\`

## Optimization

Use GridSearchCV to find the best parameters!`},date:"2024-03-12",tags:["Machine Learning","NLP","Python","scikit-learn"],slug:"machine-learning-classificacao-textos"}],e=[{id:"1",title:"Data Pipeline Automation",description:{pt:"Sistema automatizado para processamento e análise de grandes volumes de dados usando Apache Airflow e Python.",en:"Automated system for processing and analyzing large volumes of data using Apache Airflow and Python."},githubUrl:"https://github.com/kapoia/data-pipeline",tags:["Python","Apache Airflow","ETL","Data Engineering"],featured:!0},{id:"2",title:"Sentiment Analysis API",description:{pt:"API REST para análise de sentimentos em tempo real usando FastAPI e modelos de machine learning.",en:"REST API for real-time sentiment analysis using FastAPI and machine learning models."},githubUrl:"https://github.com/kapoia/sentiment-api",tags:["FastAPI","Machine Learning","NLP","Docker"],featured:!0},{id:"3",title:"Interactive Sales Dashboard",description:{pt:"Dashboard interativo para visualização de dados de vendas construído com Streamlit e Plotly.",en:"Interactive dashboard for sales data visualization built with Streamlit and Plotly."},githubUrl:"https://github.com/kapoia/sales-dashboard",tags:["Streamlit","Plotly","Data Visualization","Business Intelligence"],featured:!1},{id:"4",title:"Web Scraping Toolkit",description:{pt:"Conjunto de ferramentas para web scraping ético e eficiente usando Python e Scrapy.",en:"Toolkit for ethical and efficient web scraping using Python and Scrapy."},githubUrl:"https://github.com/kapoia/scraping-toolkit",tags:["Python","Scrapy","Web Scraping","Data Collection"],featured:!1},{id:"5",title:"Time Series Forecasting",description:{pt:"Modelos de previsão de séries temporais para análise de tendências e sazonalidade.",en:"Time series forecasting models for trend and seasonality analysis."},githubUrl:"https://github.com/kapoia/time-series-forecast",tags:["Python","Time Series","Forecasting","Statistics"],featured:!0}];export{a as sampleArticles,e as sampleProjects};
