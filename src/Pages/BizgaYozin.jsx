import React from 'react';

const BizgaYozing = () => {
  return (
    <div className="min-h-screen flex items-center  bg-blue-50 p-5">
      <div className=" shadow-md rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-3xl font-bold mb-6">Bizga yozing</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Ismingiz <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Telefon</label>
            <input
              type="tel"
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Izoh <span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full border border-gray-300 rounded-lg p-2 h-24 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Yuborish
          </button>
        </form>
      </div>
    </div>
  );
};

export default BizgaYozing;
