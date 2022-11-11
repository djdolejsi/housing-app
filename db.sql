Drop TABLE rentals;

Create TABLE rentals(
	Street_Address VARCHAR(100) Not NULL,
	CSZ VARCHAR(100) NOT NULL,
	Price VARCHAR(30) NOT NULL,
	Property_Type VARCHAR(100) NOT NULL,
	Number_of_Bedrooms VARCHAR(30) Not NULL,
	Number_of_Bathrooms VARCHAR(30) NOT Null);

Select * from rentals