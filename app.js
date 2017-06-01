//Datatables
$(document).ready(function() {
    $('#example').DataTable( {
    		//Connecting to the backend
        ajax: { url: "events.php" },
        //Formatting dates
		    columnDefs: [ {
		      targets: [3, 4],
		      render: $.fn.dataTable.render.moment('X', 'MMM Do YYYY HH:MM')
		    } ],
		    //Configuring the responsive modal
        responsive: {
            details: {
                display: $.fn.dataTable.Responsive.display.modal({
                    header: function(row) {
                        var data = row.data();
                        return data[5] + ' med '+ data[1];
                    }
                }),
                renderer: $.fn.dataTable.Responsive.renderer.tableAll({
                    tableClass: 'table'
                })
            }
        }
    });
});

