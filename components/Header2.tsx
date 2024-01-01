// FUNCTIONAL COMPONENT NAMED 'Header2'
const Header2 = () => {
  // ARRAY OF OBJECTS REPRESENTING A LIST
  const List = [
    {
      name: 'Banglore'
    },
    {
      name: 'Culcutta'
    },
    {
      name: 'Mumbai'
    },
    {
      name: 'Delhi'
    },
    {
      name: 'Hyderabad'
    }
  ]

  // RENDERING COMPONENT
  return (
    <div>
      {/* CONTAINER DIV WITH STYLING */}
      <div className='flex px-10 py-3 bg-gray-100 justify-between'>
        {/* MAPPING THROUGH THE LIST ARRAY */}
        {List.map(e => {
          return (
            // SPAN ELEMENT FOR EACH ITEM IN THE LIST WITH A UNIQUE KEY
            <span key={e.name}>{e.name}</span>
          )
        })}
      </div>
    </div>
  )
}

// EXPORTING THE HEADER2 COMPONENT AS THE DEFAULT EXPORT
export default Header2
