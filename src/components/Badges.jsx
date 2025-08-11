export default function Badges({id}) {
    return (
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-1">
        <iframe
            key={id}
            name="acclaim-badge"
            // allowtransparency="true"
            // frameborder="0"
            // scrolling="no"
            src={`https://www.credly.com/embedded_badge/${id}`}
            className="w-[250px] h-[250px] transition-transform duration-300 ease-in-out hover:scale-105 my-8"
            title="View my verified achievement on Credly."
            style={{ background: 'transparent' }}
          />
      </div>
    );
  }