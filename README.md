# CMPT-733-Project

# Project Proposal

## **Project Members**

- Abhishek Deshpande, asd27
- Ayush Sharma, asa489
- Bhavya Sankhla, bsa89
- Rituraj Ojha


## **Title** 
Automated Playlist Continuation using GNNs

## **Dataset** 
[Spotify Million Playlist Challenge](https://www.aicrowd.com/challenges/spotify-million-playlist-dataset-challenge)

The Spotify Million Playlist Dataset Challenge consists of a dataset and evaluation to enable research in music recommendations. 

## **Technologies** 

- Python
- PyG
- PyTorch
- networkx
- DeepSnap
- graph-tool
- sklearn
- flask
- HTML/CSS
- ajax

## **Overview**

Music recommendation systems have become an integral part of our daily lives, and collaborative filtering has been a popular technique used to predict user preferences. However, collaborative filtering suffers from several bottlenecks, including the lack of useful metadata, sparsity, and scalability issues. Graph-based collaborative filtering methods have gained popularity due to their ability to handle these bottlenecks and model complex relationships. In this project, we aim to use LightGCN, a state-of-the-art graph-based collaborative filtering method, to continue Spotify playlists by predicting which songs a user is likely to add to a playlist based on their existing preferences and playlist history. LightGCN leverages the graph structure to handle sparsity and scalability issues and incorporates neighbourhood information into nodes using an aggregation strategy. Additionally, it is capable of handling cold-start scenarios by generating embeddings for new users or items with no interactions by leveraging the embeddings of existing nodes in the graph. By improving the accuracy and scalability of music recommendation systems, we aim to provide a more personalized and satisfying music discovery experience for Spotify users, and ultimately contribute to the development of more effective and efficient recommendation systems in other domains.

## **Steps to run the code**

- To run using Jupyter Notebook
  - Step 1: Get the dataset from the Spotify Million Playlist Challenge from  Aicrowd (Try to not go beyond 100 files).
  - Step 2: Run the fixed_graph_gen.ipynb file ,and make sure to update the file path inside the notebooks.
  - Step 3: After running the fixed_graph_gen.ipynb a pickle for our graph would be genrated after which you can run the LightGCN_model.ipynb notebook to view the results inside the notebook.
  
- To run as a web application
  - Make sure to complete the above process of running the notebooks this will generate a pickle file for our model.
  - After pickle file is generate run the recommendation_server.py file, it will start a server and listen to requests on "http://localhost:5000/recommend" endpoint.
  - Get the FrontEndWebPage.html file open it in a browser give an  exisiting playlist name For ex: "Spring16", "TOP" etc (can be fetched from the dataset), the server will respond back with recommende songs and display it on the webpage.
