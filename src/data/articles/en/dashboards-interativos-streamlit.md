# Creating Interactive Dashboards with Streamlit

Streamlit has revolutionized how we create web applications for data science. With just a few lines of Python code, you can create impressive interactive dashboards.

## Why Streamlit?

- **Simplicity**: No need for HTML, CSS, or JavaScript knowledge
- **Speed**: Ultra-fast prototyping
- **Interactivity**: Native widgets for filters and controls

## Practical Example: Sales Dashboard

```python
import streamlit as st
import pandas as pd
import plotly.express as px

st.title("📊 Sales Dashboard")

# File upload
uploaded_file = st.file_uploader("Upload your data", type=['csv'])

if uploaded_file:
    df = pd.read_csv(uploaded_file)
    
    # Sidebar with filters
    st.sidebar.header("Filters")
    months = st.sidebar.multiselect("Select months", df['month'].unique())
    
    if months:
        df_filtered = df[df['month'].isin(months)]
        
        # Charts
        fig = px.bar(df_filtered, x='month', y='sales', title="Sales by Month")
        st.plotly_chart(fig)
        
        # Metrics
        col1, col2, col3 = st.columns(3)
        with col1:
            st.metric("Total Sales", f"${df_filtered['sales'].sum():,.2f}")
        with col2:
            st.metric("Monthly Average", f"${df_filtered['sales'].mean():,.2f}")
        with col3:
            st.metric("Analyzed Months", len(months))
```

## Simple Deploy

With Streamlit Cloud, deployment is a matter of connecting your GitHub repository!

Streamlit makes data visualization more accessible than ever.