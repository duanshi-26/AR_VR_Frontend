

const SignButtons = ({one,two}) => (
    <div className="flex space-x-6">
      <a href="#" className="py-2 px-3 border rounded-md">{one}</a>
      <a href="#" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">{two}</a>
    </div>
  );

export default SignButtons