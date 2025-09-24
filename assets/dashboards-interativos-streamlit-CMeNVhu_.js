const e=`# Criando Dashboards Interativos com Streamlit

O Streamlit revolucionou a forma como criamos aplicações web para ciência de dados. Com apenas algumas linhas de código Python, você pode criar dashboards interativos impressionantes.

## Por que Streamlit?

- **Simplicidade**: Sem necessidade de conhecimento em HTML, CSS ou JavaScript
- **Rapidez**: Prototipagem ultra-rápida
- **Interatividade**: Widgets nativos para filtros e controles

## Exemplo Prático: Dashboard de Vendas

\`\`\`python
import streamlit as st
import pandas as pd
import plotly.express as px

st.title("📊 Dashboard de Vendas")

# Upload de arquivo
uploaded_file = st.file_uploader("Carregue seus dados", type=['csv'])

if uploaded_file:
    df = pd.read_csv(uploaded_file)
    
    # Sidebar com filtros
    st.sidebar.header("Filtros")
    meses = st.sidebar.multiselect("Selecione os meses", df['mes'].unique())
    
    if meses:
        df_filtrado = df[df['mes'].isin(meses)]
        
        # Gráficos
        fig = px.bar(df_filtrado, x='mes', y='vendas', title="Vendas por Mês")
        st.plotly_chart(fig)
        
        # Métricas
        col1, col2, col3 = st.columns(3)
        with col1:
            st.metric("Total de Vendas", f"R$ {df_filtrado['vendas'].sum():,.2f}")
        with col2:
            st.metric("Média Mensal", f"R$ {df_filtrado['vendas'].mean():,.2f}")
        with col3:
            st.metric("Meses Analisados", len(meses))
\`\`\`

## Deploy Simples

Com o Streamlit Cloud, fazer deploy é questão de conectar seu repositório GitHub!

Streamlit torna a visualização de dados mais acessível que nunca.`;export{e as default};
