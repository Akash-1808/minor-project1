from flask import render_template, url_for,flash,redirect,request,abort
from miniproject import app
from miniproject.forms import Calculator
import math


@app.route("/", methods=['GET', 'POST'])
@app.route("/home", methods=['GET','POST'])
def home():
     form= Calculator()
     if form.validate_on_submit():
        flash('Hurrah, here are the results','success')
        return redirect(url_for('results', floor_area=form.floorarea.data))
     return render_template('layout.html', title='layout', form=form)

class SolarEnergyCalculator:
    def __init__(self):
        # Constants for solar panel and energy calculation
        self.panel_efficiency = 0.2  # Average solar panel efficiency (20%)
        self.panel_area = 1.6  # Average solar panel size in square meters
        self.annual_solar_hours = 1500  # Average annual sunlight hours
        self.kwh_per_panel = 300  # Typical panel output in kilowatt-hours
        self.energy_consumption_factor = 0.7  # Percentage of generated energy used

    def calculate_solar_potential(self, floor_area):
        max_panel_area = floor_area * 0.5
        num_panels = math.floor(max_panel_area / self.panel_area)
        annual_energy_generation = num_panels * self.kwh_per_panel
        usable_energy = annual_energy_generation * self.energy_consumption_factor

        avg_electricity_rate = 0.15
        co2_reduction_factor = 0.5  

        return {
            "floor_area": floor_area,
            "max_panel_area": round(max_panel_area, 2),
            "number_of_panels": num_panels,
            "annual_energy_generation": round(annual_energy_generation, 2),
            "usable_energy": round(usable_energy, 2),
            "estimated_annual_savings": round(usable_energy * avg_electricity_rate, 2),
            "co2_reduction": round(usable_energy * co2_reduction_factor, 2)
        }

    def detailed_recommendation(self, floor_area):
        results = self.calculate_solar_potential(floor_area)
        
        recommendations = [
            f"Based on your floor area of {results['floor_area']} sq. meters:",
            f"- Maximum solar panel area: {results['max_panel_area']} sq. meters",
            f"- Recommended number of panels: {results['number_of_panels']}",
            f"- Estimated annual energy generation: {results['annual_energy_generation']} kWh",
            f"- Estimated usable energy: {results['usable_energy']} kWh",
            f"- Potential annual electricity savings: ${results['estimated_annual_savings']}",
            f"- Potential CO2 reduction: {results['co2_reduction']} kg"
        ]
        
        return "\n".join(recommendations)

@app.route("/results")
def results():
    floor_area = request.args.get('floor_area', type=float)
    if floor_area is None:
        flash('No floor area provided', 'error')
        return redirect(url_for('home'))
        
    calculator = SolarEnergyCalculator()
    results_data = calculator.calculate_solar_potential(floor_area)
    recommendations = calculator.detailed_recommendation(floor_area)

    return render_template('results.html', results=results_data, recommendations=recommendations)