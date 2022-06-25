window.onload = () => {
 var row= [
   {   
        row_one: '1',
        row_two: 'GRAM FLOUR(Sri Meenakshi Mark Agmark)',
        row_three: 'Rs.700/',
        row_four: 'Rs.1400/',
        row_five: 'Rs.3500/',
        row_six:'Rs.5250/',
        row_seven:'Not available',
        row_eight:'Rs.1600/',
        row_nine:'Rs.1600/',
        row_ten:'Rs.800/'
    },
    {
        row_one: '2',
        row_two: 'RICE FLOUR(Sri Mappilai Vinayagar)',
        row_three: 'Rs.300/',
        row_four: 'Rs.600/',
        row_five: 'Rs.1500/',
        row_six:'Not available',
        row_seven:'Rs.2700/',
        row_eight:'Rs.1600/',
        row_nine:'Rs.1600/',
        row_ten:'Rs.800/'
    },
    {
        row_one: '3',
        row_two: 'MAIZE-STARCH(Sri Meenakshi Mark)',
        row_three: 'Rs.250/',
        row_four: 'Rs.500/',
        row_five: 'Rs.2500/',
        row_six:'Rs.5250/',
        row_seven:'Not available',
        row_eight:'Rs.1600/',
        row_nine:'Rs.1600/',
        row_ten:'Rs.800/'
    },
    {
        row_one: '4',
        row_two: 'PEAS FLOUR(MLS)',
        row_three: 'Rs.640/',
        row_four: 'Rs.1280/',
        row_five: 'Rs.3200/',
        row_six:'Rs.4800/',
        row_seven:'Not available',
        row_eight:'Rs.1480/',
        row_nine:'Rs.1480/',
        row_ten:'Rs.740/'
    },
    {
        row_one: '5',
        row_two: 'GRAM DHALL GRITS',
        row_three: 'Not available',
        row_four: 'Not available',
        row_five: 'Rs.4000/',
        row_six:'Not available',
        row_seven:'Not avilable',
        row_eight:'Not available',
        row_nine:'Not available',
        row_ten:'Not available'
    },
    {
        row_one: '6',
        row_two: 'CORN GRITS',
        row_three: 'Not available',
        row_four: 'Not available',
        row_five: 'Rs.3500/',
        row_six:'Not available',
        row_seven:'Not available',
        row_eight:'Not available',
        row_nine:'Not available',
        row_ten:'Not available'
    },
    {
        row_one: '7',
        row_two: 'BESAN(Sri Mappilai Vinayagar)',
        row_three: 'Rs.600/',
        row_four: 'Rs.1200/',
        row_five: 'Rs.3000/',
        row_six:'Rs.4500/',
        row_seven:'Not available',
        row_eight:'Not available',
        row_nine:'Rs.1300/',
        row_ten:'Rs.650/'
    },
    {
        row_one: '7',
        row_two: 'BESAN FLOUR(Sri Mappilai Vinayagar)',
        row_three: 'Rs.600/',
        row_four: 'Rs.1200/',
        row_five: 'Rs.3000/',
        row_six:'Rs.4500/',
        row_seven:'Not available',
        row_eight:'Not available',
        row_nine:'Rs.1300/',
        row_ten:'Rs.650/'
     
    },
    {
        row_one: '8',
        row_two: 'CORN FLOUR(Sri Mappilai Vinayagar)',
        row_three: 'Rs.600/',
        row_four: 'Rs.1200/',
        row_five: 'Rs.3000/',
        row_six:'Rs.4500/',
        row_seven:'Not available',
        row_eight:'Not available',
        row_nine:'Rs.1300/',
        row_ten:'Rs.650/'
 
    },
    {
        row_one: '9',
        row_two: 'WHEAT BROKEN(Sri Meenakshi Mark)',
        row_three: 'Rs.500',
        row_four: 'Rs.1000/',
        row_five: 'Rs.2500/',
        row_six:'Rs.3750',
        row_seven:'Not available',
        row_eight:'Not available',
        row_nine:'Rs.1100/',
        row_ten:'Rs.550/'
    },
    {
        row_one: '10',
        row_two: 'SAMBA WHEAT BROKEN(Sri Meenakshi Mark)',
        row_three: 'Rs.700/',
        row_four: 'Rs.1400/',
        row_five: 'Rs.3500/',
        row_six:'Rs.5250/',
        row_seven:'Not available',
        row_eight:'Rs.1600/',
        row_nine:'Rs.1600/',
        row_ten:'Rs.800/'
    },
    {
        row_one: '11',
        row_two: 'ORID DHALL',
        row_three: 'Rs.600/',
        row_four: 'Rs.1200/',
        row_five: 'Rs.3000/',
        row_six:'Rs.4500/',
        row_seven:'Not available',
        row_eight:'Rs.1300/',
        row_nine:'Rs.1300/',
        row_ten:'Rs.650/'
    },
];

var table = '<table class="stores">';
table += '<thead>';
table += '<th bgcolor="#212429" style="color:white;"style="font-family:bold;">S.NO</th>';
table += '<th bgcolor="#212429" style="color:white;" style="font-family:bold;">Products</th>';
table += '<th bgcolor="#212429" style="color:white;" style="font-family:bold;">10 kg</th>';
table += '<th bgcolor="#212429" style="color:white;" style="font-family:bold;">20 kg</th>';
table += '<th bgcolor="#212429" style="color:white;" style="font-family:bold;">50 kg</th>';
table += '<th bgcolor="#212429" style="color:white;" style="font-family:bold;">75 kg</th>';
table += '<th bgcolor="#212429" style="color:white;" style="font-family:bold;">90 Kg</th>';
table +='<th bgcolor="#212429" style="color:white;" style="font-family:bold;">1kg package(20kg)</th>';
table +='<th bgcolor="#212429" style="color:white;" style="font-family:bold;">1/2kg package(20kg)</th>';
table +='<th bgcolor="212429" style="color:white;" style="font-family:bold;">1/2kg pacage(10kg)</th>';
table += '</thead>';
for (var i=0; i< row.length; i++) {
table +='<tr class=h1>';
table +='<td>' +row[i]['row_one']+ '</td>';
table +='<td>' +row[i]['row_two']+ '</td>';
table +='<td>' +row[i]['row_three']+ '</td>';
table +='<td>' +row[i]['row_four']+ '</td>'
table +='<td>' +row[i]['row_five']+ '</td>';
table +='<td>' +row[i]['row_six']+ '</td>';
table +='<td>' +row[i]['row_seven']+ '</td>';
table +='<td>' +row[i]['row_eight']+ '</td>';
table +='<td>' +row[i]['row_nine']+ '</td>';
table +='<td>' +row[i]['row_ten']+ '</td>';
table +='</tr>';
}
table +='</table>';
console.log('table', table);
var c = document.getElementById('table-container');
c.insertAdjacentHTML('afterbegin', table);
};