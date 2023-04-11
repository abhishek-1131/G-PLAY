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
