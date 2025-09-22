---
id: '2'
title:
  pt: 'Criando Dashboards Interativos com Streamlit'
  en: 'Creating Interactive Dashboards with Streamlit'
summary:
  pt: 'Aprenda a criar dashboards web interativos de forma simples e rápida usando Streamlit.'
  en: 'Learn to create interactive web dashboards simply and quickly using Streamlit.'
date: '2024-02-08'
tags: ['Streamlit', 'Dashboard', 'Python', 'Web App']
slug: 'dashboards-interativos-streamlit'
---

# Criando Dashboards Interativos com Streamlit

Streamlit revolucionou a forma como criamos aplicações web para ciência de dados. Com apenas algumas linhas de código, você pode transformar seus scripts Python em aplicações interativas.

## Por que Streamlit?

- **Simplicidade**: Sem necessidade de HTML, CSS ou JavaScript
- **Rapidez**: Deploy em minutos
- **Integração**: Funciona perfeitamente com bibliotecas de dados

## Exemplo Prático

```python
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
```

## Deployment

O Streamlit Cloud torna o deployment gratuito e sem complicações!

---

# Creating Interactive Dashboards with Streamlit

Streamlit has revolutionized how we create web applications for data science. With just a few lines of code, you can transform your Python scripts into interactive applications.

## Why Streamlit?

- **Simplicity**: No need for HTML, CSS or JavaScript
- **Speed**: Deploy in minutes
- **Integration**: Works perfectly with data libraries

## Practical Example

```python
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
```

## Deployment

Streamlit Cloud makes deployment free and hassle-free!