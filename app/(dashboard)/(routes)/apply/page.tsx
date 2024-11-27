"use client";
import { ChangeEvent, FormEvent, useState } from "react";

const ApplyPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        university: "",
        degree: "",
    });
    const [files, setFiles] = useState<{
        idDocument: File | null;
        graduationDocument: File | null;
    }>({
        idDocument: null,
        graduationDocument: null,
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFiles({ ...files, [e.target.name]: e.target.files ? e.target.files[0] : null });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here (e.g., send data to the server)
        console.log("Form Data:", formData);
        console.log("Uploaded Files:", files);
        alert("Application submitted successfully!");
    };

    return (
        <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-center mb-6">Apply to Be a Tutor</h1>
            <form onSubmit={handleSubmit}>
                {/* Personal Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">University</label>
                        <input
                            type="text"
                            name="university"
                            value={formData.university}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Degree</label>
                        <input
                            type="text"
                            name="degree"
                            value={formData.degree}
                            onChange={handleInputChange}
                            className="w-full border border-gray-300 rounded-lg p-2"
                            required
                        />
                    </div>
                </div>

                {/* Document Upload */}
                <div className="mt-6">
                    <label className="block text-sm font-medium mb-1">Upload ID Document</label>
                    <input
                        type="file"
                        name="idDocument"
                        accept=".jpg,.png,.pdf"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
                        required
                    />
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">Upload Graduation Document</label>
                    <input
                        type="file"
                        name="graduationDocument"
                        accept=".jpg,.png,.pdf"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-blue-50 file:text-blue-700
                        hover:file:bg-blue-100"
                        required
                    />
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
                    >
                        Submit Application
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ApplyPage;
