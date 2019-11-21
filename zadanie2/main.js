$(document).ready(function() {
    $.getJSON("test.php") // pobieranie pliku

        .done(function(data) {

          var url = "https://static01.helion.com.pl/global/okladki/326x466/";
          var employee_data = '';

          $.each(data, function(key, value){

                employee_data += '<tr>';
                employee_data += '<td>'+value.ident+'</td>';
                employee_data += '<td>'+value.tytul+'</td>';
                employee_data += '<td>'+value.autor+'</td>';
                employee_data += '<td>'+value.cena+'</td>';
                employee_data += '<td>'+value.typ+'</td>';
                employee_data += '<td>'+value.status+'</td>';
                employee_data += '<td><img class="img-fluid okladka w-25" src="'+url+value.ident+'.jpg" alt="'+value.tytul+'"></td>';
                employee_data += '</tr>';

          });

          $('#dane').append(employee_data);  // wstawienie rekordów do kodu HTML

          $(".okladka").on("error", function(){
            $(this).attr('src', url+'helion-brak.jpg'); // domyślny obrazek, w przypadku braku okładki
          });

          $('#example').DataTable({
            "columnDefs": [
                { "orderable": false, "targets": 6 } // usunięcie sortowania dla okładek
            ],
            "pagingType": "simple_numbers", // zdefiniowanie typu paginacji 
            "lengthMenu": [ 10, 20, 50, 100 ], // pokazywanie określonej liczby wpisów
            "language": { 
                "lengthMenu": "Pokaż _MENU_ pozycji",
                "zeroRecords": "Nie znaleziono pasujących pozycji",
                "info": "Strona _PAGE_ z _PAGES_",
                "infoEmpty": "Brak danych",
                "emptyTable":     "Brak danych",
                "infoFiltered": "(filtrowanie spośród _MAX_ pozycji)",
                "search": "Szukaj:",
                "paginate": {
                  "first":"Pierwsza",
                  "last":"Ostatnia",
                  "next":">",
                  "previous":"<"
                },
                "aria": {
                  "sortAscending": ": aktywuj, by posortować kolumnę rosnąco",
                  "sortDescending": ": aktywuj, by posortować kolumnę malejąco"
                }
            }

          })
      })

      .fail(() => {
          alert("Wystąpił błąd w połączeniu");
      });


});