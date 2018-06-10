function clearTextField( fname )
{
   fname.value = ''; 
}

function search()
{
    term = escape( document.searching.term.value );
    if ( term.length < 2 ) alert( 'Please enter a term to search for.' );
    else location.href = "/search.php?cat=movies&per=10&page=1&field=Description&term=" + term ;
}	

function showHelp()
{
    window.open( '/navigation.php', "Help", "toolbar=no,location=no,status=no,menubar=yes,scrollbars=yes,width=400,height=300" );
}

function modForms()
{
    window.open( '/board/showthread.php?threadid=428996', "Help", "toolbar=no,location=no,status=no,menubar=yes,scrollbars=yes" );
}
