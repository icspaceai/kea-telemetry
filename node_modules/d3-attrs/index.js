import { selection as d3selection } from 'd3-selection';
import { select } from 'd3-selection';

const getFunction = type => function( data ) {
  if( typeof data === 'function' ) {
    return this.each( function() {
      let cur = select( this ),
          obj = data.apply( this, arguments );
    
      for ( let attrName in obj ) cur[ type ]( attrName, obj[attrName] );
    });
  }

  for( let attrName in data )
    this[ type ]( attrName, data[attrName] );

  return this;
}

d3selection.prototype.attrs = getFunction( 'attr' );
d3selection.prototype.styles = getFunction( 'style' );
