export default function CreateListing() {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create Listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1">
          <input
            type="text"
            className="border p-3 rounded-lg"
            id="name"
            placeholder="Name"
            maxLength="70"
            minLength="10"
            required
          />
          <textarea
            type="text"
            className="border p-3 rounded-lg"
            id="description"
            placeholder="Description"
            required
          />
          <input
            type="text"
            className="border p-3 rounded-lg"
            id="address"
            placeholder="Address"
            required
          />
          <div className="flex gap-7 flex-wrap">
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="sale" />
              <span>Sell</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="rent" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="parking" />
              <span>Parking Spot</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="furnished" />
              <span>Furnished</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" className="w-5" id="offer" />
              <span>Offer</span>
            </div>
          </div>
          <div className="flex gap-7 flex-wrap">
            <div className="flex items-center gap-2">
              <input
                type="number"
                className="p-2 border border-gray-300 rounded-lg"
                id="bedrooms"
                min="1"
                max="10"
              />
              <p>Bedrooms</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                className="p-2 border border-gray-300 rounded-lg"
                id="bathrooms"
                min="1"
                max="10"
              />
              <p>Bathrooms</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                className="p-2 border border-gray-300 rounded-lg"
                id="regular-price"
                min="1"
                max="10"
              />
              <div className="flex flex-col items-center">
                <p>Regular Price</p>
                <span className="text-xs">(₹/month)</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                className="p-2 border border-gray-300 rounded-lg"
                id="discounted-price"
                min="1"
                max="10"
              />
              <div className="flex flex-col items-center">
                <p>Discounted Price</p>
                <span className="text-xs">(₹/month)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-8">
            <p className="font-semibold">Images:
                <span className="font-normal text-gray-500 ml-2">First Image will be Cover Image(max 5)</span>
            </p>
            <div className=" flex gap-3 ">
                <input type="file" className="p-3 border border-gray-300 rounded w-full " id="images" accept="image/*" multiple/>
                <button className="p-3 text-green-700 border border-green-600 rounded uppercase hover:shadow-lg disabled:opacity-80">Upload</button>
            </div>
        <button className="p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Create Listing</button>

        </div>
      </form>
    </main>
  );
}
