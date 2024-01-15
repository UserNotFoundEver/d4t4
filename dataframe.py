import requests
import pandas as pd

# Replace 'api_url' with the actual API endpoint you're using
api_url = 'https://api.example.com/data'

# Make an API request
response = requests.get(api_url)

# Check if the request was successful
if response.status_code == 200:
    # Parse the JSON response into a Python list
    data_list = response.json()

    # Convert the list into a Pandas DataFrame
    df = pd.DataFrame(data_list)

    # Now you can work with the DataFrame 'df'
    print(df.head())
else:
    print(f"Failed to retrieve data: {response.status_code}")
