var status = ( new Foo() ).check
if( 'ok' == status ){

    window.alert( 'your app built.' );

    document.body.append( document.createTextNode(
	'great job!' ) );
}
