import pandas as pd
df = pd.read_csv("lattitude_longitude.csv")
df1=df.drop("Australia",axis=1)
for i in range(len(df1)):
    x = df1.Lattitude_Longitude[i]
    y = x.split(",")
    print({'latitude':y[0],'longitude':y[1]})
