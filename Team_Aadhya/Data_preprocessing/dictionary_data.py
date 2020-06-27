
import pandas as pd
import numpy as np
# importing the file that has list of countries and their latitudes and longitudes
df = pd.read_csv("lattitude_longitude.csv")
# accessing the list of countries as data w.r.t them is stored with country_name
List = list(df.Australia)
# writing an iterator to extract the latest trend of each social media data from list of csv files
for i in range(len(df)):
    df1 = pd.read_csv("Social_Trends_Country_Wise/{}.csv".format(List[i]))
    # transposing the rows and columns
    df2 = pd.DataFrame.transpose(df1)
    # dropping the unnecessary columns and rows
    df3 = df2.drop([1,2,3,4,5,6,7,8,9,10,11,12],axis=1)
    df4 = df3.drop('Date',axis = 0)
    # extracting latitude and longitude data from data frame
    x = df.Lattitude_Longitude[i]
    y = x.split(",")
    # generating a key_value pair i.e. dictionary to store the values as shown
    print({'latitude':float(y[0]),'longitude':float(y[1]),'values':((list(df4[0]))[0:8]),'name':List[i]})






