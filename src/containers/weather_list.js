import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from '../components/chart'
import Maps from '../components/maps'

class WeatherList extends Component {
    renderWeather(cityData) {
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp)
        const pressure = cityData.list.map(pressures => pressures.main.pressure)
        const humidity = cityData.list.map(humidities => humidities.main.humidity)



        return (
            <tr key={name}>
                <td><Maps lat={cityData.city.coord.lat} lon={cityData.city.coord.lon}/></td>
                <td>
                   <Chart data={temps} color="orange" units="K"/>
                </td>
                <td>
                <Chart data={pressure} color="green" units="hPa"/>
                </td>
                <td>
                <Chart data={humidity} color="black" units="%"/>
                </td>
            </tr>
            
        )
    }
    render(){
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressue (hPa)</th>
                    <th>Humidity (%)</th>
                </tr>
            </thead>
            <tbody>
            {this.props.weather.map(this.renderWeather)}
            </tbody>
            </table>
        )
    }
}
function mapStateToProps({weather}){
    return {
        weather
    };
}
export default connect(mapStateToProps)(WeatherList)