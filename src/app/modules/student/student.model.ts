import { Schema, model } from 'mongoose';
import { Student } from './student.interface';

// Define a schema for the name
const NameSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

// Define a schema for the guardian
const GuardianSchema = new Schema({
  fatherName: { type: String },
  fatherOccupation: { type: String },
  fatherContactNo: { type: String },
  motherName: { type: String },
  motherOccupation: { type: String },
});

// Define a schema for the local guardian
const LocalGuardianSchema = new Schema({
  name: { type: String },
  occupation: { type: String },
  contactNo: { type: String },
  address: { type: String },
});

// Define the main student schema using the previously defined schemas
const StudentSchema = new Schema<Student>({
  id: { type: String },
  name: {
    type: NameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  dateOfBirth: { type: String },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    required: true,
  },
  presentAddress: { type: String },
  parmanentAddress: { type: String },
  gurdian: {
    type: GuardianSchema,
  },
  localGurdian: {
    type: LocalGuardianSchema,
  },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    required: true,
  },
});

const StudentModel = model<Student>('Student', StudentSchema);

export default StudentModel;
