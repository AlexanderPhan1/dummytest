import React, { Component } from 'react';

class Settings extends Component {
    state = {
        chefName: "",
        foods: [],
        description: "",
        availability: "",
        city: "",
        range: "",
    }

    // The settings page should load a user's profile and their preferences from the backend.
    // After doing so, it should load the state based on what the user has filled in previously.
    // With a form box, or maybe with inputs, the state should be altered based on what the user changes in their settings
    // After clicking submit, review to ask if the user is OK with the changes they've made
    // Then take the state and update the user's profile in the backend.

    // When the component mounts, it runs the 'loadUserProfile' function that pulls their personal information.
    componentDidMount() {
        this.loadUserProfile();
    };

    // Function definition that sets the state of the user's profile so they can change their settings.
    loadUserProfile = () => {

        API.loadChefProfile()
            .then( res => 
                this.setState( 
                    {
                    foods: res.data.foods, 
                    chef: res.data.chef,
                    description: res.data.description,
                    availability: res.data.availability,
                    city: res.data.city,
                    range: res.data.range,
                    }
                )
            )
            .catch(err => console.log(err))
            // ^ Console logs an error after the request has been made
    };

    // Renders the component
    render() {
        return (

            // NAVBAR GOES HERE (seperate component)

            // SEARCH BOX GOES HERE (seperate component)

            // Container with the settings that they want to change
            // Need to figure out how they would update each state change.
            <container>
                <form>
                    <input>{this.state.chefName}</input>
                    <input>{this.state.foods}</input>
                    <input>{this.state.description}</input>
                    <input>{this.state.availability}</input>
                    <input>{this.state.city}</input>
                    <input>{this.state.range}</input>

                    <button className="submit" onChange="updateChefProfile"> Submit changes</button>
                </form>
            </container>

            // FOOTER GOES HERE (seperate component)

        )
    };
}  