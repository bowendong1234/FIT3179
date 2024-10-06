var vg_1 = "bushfire_vis.vg.json";
vegaEmbed("#bushfire_chart", vg_1, {renderer: 'svg'}).then(function(result) {
}).catch(console.error);

var vg_2 = "inhalants_and_adrenergics.vg.json";
vegaEmbed("#inhalants_and_adrenergics_chart", vg_2, {renderer: 'svg'}).then(function(result) {
}).catch(console.error);

var vg_3 = "inhaler_pres_shortness.vg.json";
vegaEmbed("#inhaler_sales", vg_3, {renderer: 'svg'}).then(function(result) {
}).catch(console.error);