# HospiPlus

## Idea behind the concept

The Idea basically is to create a Geo-Locative web app which will facilitate the user to browse the nearest hospitals along with the their bed count. Also specifically displaying the ICU and other categories of beds. We will try to make the website as simple as possible to make it convenient during the time of emergencies.
The Home page will be displaying hospital listings , different for every user based on their location sorted in the increasing order of distance as well as graphically plotting them on the map using Here Maps. The user can seect the marker on map which will open a component displaying the hospital details.

The home page will link to a panel for the hospital authorities to signup on our portal. If a hospital decides to signup , they will be led to a Dashboard where they can upload general information about their hospital including Name, Address, Services Offered, Contact details,  and the most important the bed count. Once they sign up, the hospital listing will be stored in our database and will now be displayed on our website. Later the hospital authorities can manually keep on updating the bed count.

## Product Demo

https://drive.google.com/file/d/1xSLucXnEpSf9fDQzUvJ_GpbEXDBD92id/view?usp=sharing

## Product Slides

https://docs.google.com/presentation/d/1tdTIsyhC-JraaVsxB2IFKG3hEnKSK8JiSU0LBrNlmUA/edit?usp=sharing

## Tools used

* Frontend - React, Reactstrap, HERE MAPS SDK

* Backend - Djnago Rest Framework

# DRF endpoint

The main Django app 'hospital' contains a url.py file which contains all the feature endpoints. The endpoints as also listed below -

`hospitals/` - to retrive the list of all hospitals currently stored in the database via GET request.

`hospitals/<int:id>/` - to retrive the information of a particular hospital with the id via GET request

`hospitals/<int:id>/update/` - to update any of the model fields of a particular hospital i.e. bed counts in our case via PUT request.

`hospitals/create/` - to create a new hospital entry in the database via POST request.

## Instructions to setup

### Client

`yarn && yarn start`

