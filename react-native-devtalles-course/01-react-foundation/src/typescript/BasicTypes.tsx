
export const BasicTypes = () => {

  const name: string = 'John Doe';
  const age: number = 47;
  const isActive: boolean = true;

  const powers = ['React', 'TypeScript', 'Node.js', 'ReactNative'];

  powers.push('Next')

  return (
    <>
        <h3>Basic Types</h3>
        { name } { age } { isActive ? 'true' : 'false' }

        { powers.join(', ') }
    </>
  )
}
