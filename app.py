# import necessary libraries
import numpy as np
import pandas as pd

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
# import os
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Database Setup
#################################################

engine = create_engine("sqlite:///Resources/housing_data.sqlite")

# Reflect an existing database into a new model
Base = automap_base()

# Reflect the tables
Base.prepare(engine, reflect=True)

# Save reference to table
# AllenBuyData = Base.classes.allen_buy
# DallasBuyData = Base.classes.dallas_buy
# FriscoBuyData = Base.classes.frisco_buy
# PlanoBuyData = Base.classes.plano_buy
# RichardsonBuyData = Base.classes.richardson_buy
# AllenRentData = Base.classes.allen_rent
# DallasRentData = Base.classes.dallas.rent
# FriscoRentData = Base.classes.frisco_rent
# PlanoRentData = Base.classes.plano_rent
# RichardsonRentData = Base.classes.richardson_rent

# from flask_sqlalchemy import SQLAlchemy
# app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///../Resources/housing_data.sqlite"

# Remove tracking modifications
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(app)

# create route that renders index.html template
@app.route("/")
def welcome():
    return render_template("live214.html")


# Query the database and send the jsonified results
@app.route("/buy")
def buy():
    return render_template("pricechart.html")

@app.route("/rent")
def rent():
    return render_template("rentchart.html")


if __name__ == "__main__":
    app.run()
