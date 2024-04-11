var url = "http://localhost:3300/api/users";

function postUser() {
	console.log(url);
	var myUrl = $('#url').val();
	var myName = $('#name').val();
	var myStatus = $('#status').val();

	var myuser = {
		url: myUrl,
		name: myName,
		status: myStatus,
	};
	console.log(myuser);

	$.ajax({
		url: url,
		type: 'post',
		dataType: 'json',
		contentType: 'application/json',
		success: function (data) {
			console.log(data);
			$('#resultado').html(JSON.stringify(data.user));
		},
		data: JSON.stringify(myuser)
	});
}

/*function getUsers() {
	console.log(url);

	$.getJSON(url,
		function(json) {
			console.log(json);

			var arrUsers = json.users;

			var htmlTableUsers = '<table border="1">';

			arrUsers.forEach(function(item) {
				console.log(item);
				htmlTableUsers += '<tr>' +
					'<td>' + item.id + '</td>' +
					'<td>' + item.url + '</td>' +
					'<td>' + item.name + '</td>' +
					'<td>' + item.status + '</td>' +
					'</tr>';
			});

			htmlTableUsers += '</table>';

			$('#resultado').html(htmlTableUsers);

		}
	);
}*/

function getUsers() {
    console.log(url);

    $.getJSON(url,
        function(json) {
            console.log(json);

            var arrUsers = json.users;

            var htmlTableUsers = '<table border="1">';

            arrUsers.forEach(function(item) {
                console.log(item);
                htmlTableUsers += '<tr>' +
                    '<td>' + item.id + '</td>' +
                    '<td><img src="' + item.url + '" alt="' + item.name + '"></td>' +
                    '<td>' + item.name + '</td>' +
                    '<td>' + item.status + '</td>' +
                    '</tr>';
            });

            htmlTableUsers += '</table>';

            $('#resultado').html(htmlTableUsers);

        }
    );
}
