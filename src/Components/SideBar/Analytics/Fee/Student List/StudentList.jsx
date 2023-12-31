import React from "react";

function StudentList() {
    return (
        <div className="w-[88.3vw]">
            <section className="mx-auto w-[100%] px-4 py-4">
                <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
                    <div>
                        <h2 className="text-lg font-semibold text-black">Students</h2>
                        <p className="mt-1 text-sm text-gray-700">
                            This is a list of all Students and their Fees status
                        </p>
                    </div>
                </div>
                <div className="mt-6 flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                                            >
                                                <span>Student Name</span>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                                            >
                                                Total Fees
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                                            >
                                                Status
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                                            >
                                                Branch
                                            </th>
                                            <th scope="col" className="relative px-4 py-3.5">
                                                <span className="sr-only">Edit</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 bg-white">
                                        <tr className="border-t border-gray-200">
                                            <th
                                                colSpan="5"
                                                scope="col"
                                                className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-medium text-gray-500"
                                            >
                                                CSE
                                            </th>
                                        </tr>
                                        <tr>
                                            <td className="whitespace-nowrap px-4 py-4">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0">
                                                        <img
                                                            className="h-10 w-10 rounded-full object-cover"
                                                            src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900 ">
                                                            Jasnoor Singh
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            jasnoor0686.be21@chitkara.edu.in
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-12 py-4">
                                                <div className="text-sm text-gray-900">₹60000</div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4">
                                                <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                    Paid
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                                                CSE
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                                                <a href="#" className="text-gray-500">
                                                    Edit
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="whitespace-nowrap px-4 py-4">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0">
                                                        <img
                                                            className="h-10 w-10 rounded-full object-cover"
                                                            src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=928&amp;q=80"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900 ">
                                                            Hashir Yameen
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            hashir0601.be21@chitkara.edu.in
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-12 py-4">
                                                <div className="text-sm text-gray-900">₹69000</div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4">
                                                <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                    Paid
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                                                CSE
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                                                <a href="#" className="text-gray-500">
                                                    Edit
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="whitespace-nowrap px-4 py-4">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0">
                                                        <img
                                                            className="h-10 w-10 rounded-full object-cover"
                                                            src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900 ">
                                                            Jasnoor Singh
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            jasnoor0686.be21@chitkara.edu.in
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-12 py-4">
                                                <div className="text-sm text-gray-900">₹60000</div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4">
                                                <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                    Paid
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                                                CSE
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                                                <a href="#" className="text-gray-500">
                                                    Edit
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="whitespace-nowrap px-4 py-4">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0">
                                                        <img
                                                            className="h-10 w-10 rounded-full object-cover"
                                                            src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900 ">
                                                            Jasnoor Singh
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            jasnoor0686.be21@chitkara.edu.in
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-12 py-4">
                                                <div className="text-sm text-gray-900">₹60000</div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4">
                                                <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                    Pending
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                                                CSE
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                                                <a href="#" className="text-gray-500">
                                                    Edit
                                                </a>
                                            </td>
                                        </tr>
                                        <tr className="border-t border-gray-200">
                                            <th
                                                colSpan="5"
                                                scope="col"
                                                className="bg-gray-50 py-2 pl-4 pr-3 text-left text-sm font-medium text-gray-500"
                                            >
                                                Mechanical
                                            </th>
                                        </tr>
                                        <tr>
                                            <td className="whitespace-nowrap px-4 py-4">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0">
                                                        <img
                                                            className="h-10 w-10 rounded-full object-cover"
                                                            src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900 ">
                                                            Jasnoor Singh
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            jasnoor0686.be21@chitkara.edu.in
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-12 py-4">
                                                <div className="text-sm text-gray-900">₹60000</div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4">
                                                <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                    Paid
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                                                CSE
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                                                <a href="#" className="text-gray-500">
                                                    Edit
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="whitespace-nowrap px-4 py-4">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0">
                                                        <img
                                                            className="h-10 w-10 rounded-full object-cover"
                                                            src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900 ">
                                                            Jasnoor Singh
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            jasnoor0686.be21@chitkara.edu.in
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-12 py-4">
                                                <div className="text-sm text-gray-900">₹60000</div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4">
                                                <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                    Paid
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                                                CSE
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                                                <a href="#" className="text-gray-500">
                                                    Edit
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="whitespace-nowrap px-4 py-4">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 flex-shrink-0">
                                                        <img
                                                            className="h-10 w-10 rounded-full object-cover"
                                                            src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1160&amp;q=80"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900 ">
                                                            Jasnoor Singh
                                                        </div>
                                                        <div className="text-sm text-gray-500">
                                                            jasnoor0686.be21@chitkara.edu.in
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="whitespace-nowrap px-12 py-4">
                                                <div className="text-sm text-gray-900">₹60000</div>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4">
                                                <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                                                    Pending
                                                </span>
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-sm text-gray-500">
                                                CSE
                                            </td>
                                            <td className="whitespace-nowrap px-4 py-4 text-right text-sm font-medium">
                                                <a href="#" className="text-gray-500">
                                                    Edit
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                    <a
                        href="#"
                        className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-4 w-4"
                        >
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        <span>previous</span>
                    </a>
                    <div className="hidden items-center gap-x-3 md:flex">
                        <a href="#" className="rounded-md bg-gray-100 px-2 py-1 text-sm">
                            1
                        </a>
                        <a
                            href="#"
                            className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100"
                        >
                            2
                        </a>
                        <a
                            href="#"
                            className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100"
                        >
                            3
                        </a>
                        <a
                            href="#"
                            className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100"
                        >
                            ...
                        </a>
                        <a
                            href="#"
                            className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100"
                        >
                            12
                        </a>
                        <a
                            href="#"
                            className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100"
                        >
                            13
                        </a>
                        <a
                            href="#"
                            className="rounded-md px-2 py-1 text-sm text-gray-500 hover:bg-gray-100"
                        >
                            14
                        </a>
                    </div>
                    <a
                        href="#"
                        className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100"
                    >
                        <span>Next</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="h-4 w-4"
                        >
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            </section>
        </div>
    );
}

export default StudentList;
