// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.21.12
// source: simrs.proto

package __

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

var File_simrs_proto protoreflect.FileDescriptor

var file_simrs_proto_rawDesc = []byte{
	0x0a, 0x0b, 0x73, 0x69, 0x6d, 0x72, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x05, 0x73,
	0x69, 0x6d, 0x72, 0x73, 0x1a, 0x0f, 0x65, 0x6e, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x65, 0x72, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0d, 0x70, 0x61, 0x74, 0x69, 0x65, 0x6e, 0x74, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x0b, 0x71, 0x75, 0x65, 0x75, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x32, 0x56, 0x0a, 0x0e, 0x50, 0x61, 0x74, 0x69, 0x65, 0x6e, 0x74, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x12, 0x44, 0x0a, 0x0b, 0x47, 0x65, 0x74, 0x50, 0x61, 0x74, 0x69, 0x65, 0x6e,
	0x74, 0x73, 0x12, 0x19, 0x2e, 0x73, 0x69, 0x6d, 0x72, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x50, 0x61,
	0x74, 0x69, 0x65, 0x6e, 0x74, 0x73, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1a, 0x2e,
	0x73, 0x69, 0x6d, 0x72, 0x73, 0x2e, 0x47, 0x65, 0x74, 0x50, 0x61, 0x74, 0x69, 0x65, 0x6e, 0x74,
	0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x32, 0x70, 0x0a, 0x10, 0x45, 0x6e, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x5c, 0x0a,
	0x13, 0x47, 0x65, 0x74, 0x45, 0x6e, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x65, 0x72, 0x44, 0x65, 0x74,
	0x61, 0x69, 0x6c, 0x73, 0x12, 0x21, 0x2e, 0x73, 0x69, 0x6d, 0x72, 0x73, 0x2e, 0x47, 0x65, 0x74,
	0x45, 0x6e, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x65, 0x72, 0x44, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x73,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x22, 0x2e, 0x73, 0x69, 0x6d, 0x72, 0x73, 0x2e,
	0x47, 0x65, 0x74, 0x45, 0x6e, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x65, 0x72, 0x44, 0x65, 0x74, 0x61,
	0x69, 0x6c, 0x73, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x32, 0xd3, 0x01, 0x0a, 0x0c,
	0x51, 0x75, 0x65, 0x75, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x44, 0x0a, 0x0b,
	0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x51, 0x75, 0x65, 0x75, 0x65, 0x12, 0x19, 0x2e, 0x73, 0x69,
	0x6d, 0x72, 0x73, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x51, 0x75, 0x65, 0x75, 0x65, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1a, 0x2e, 0x73, 0x69, 0x6d, 0x72, 0x73, 0x2e, 0x55,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x51, 0x75, 0x65, 0x75, 0x65, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x12, 0x7d, 0x0a, 0x1e, 0x43, 0x6f, 0x6d, 0x70, 0x65, 0x6e, 0x73, 0x61, 0x74, 0x65,
	0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x51, 0x75, 0x65, 0x75, 0x65, 0x45, 0x6e, 0x63, 0x6f, 0x75,
	0x6e, 0x74, 0x65, 0x72, 0x12, 0x2c, 0x2e, 0x73, 0x69, 0x6d, 0x72, 0x73, 0x2e, 0x43, 0x6f, 0x6d,
	0x70, 0x65, 0x6e, 0x73, 0x61, 0x74, 0x65, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x51, 0x75, 0x65,
	0x75, 0x65, 0x45, 0x6e, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x2d, 0x2e, 0x73, 0x69, 0x6d, 0x72, 0x73, 0x2e, 0x43, 0x6f, 0x6d, 0x70, 0x65,
	0x6e, 0x73, 0x61, 0x74, 0x65, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x51, 0x75, 0x65, 0x75, 0x65,
	0x45, 0x6e, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73,
	0x65, 0x42, 0x03, 0x5a, 0x01, 0x2e, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var file_simrs_proto_goTypes = []interface{}{
	(*GetPatientsRequest)(nil),                     // 0: simrs.GetPatientsRequest
	(*GetEncounterDetailsRequest)(nil),             // 1: simrs.GetEncounterDetailsRequest
	(*UpdateQueueRequest)(nil),                     // 2: simrs.UpdateQueueRequest
	(*CompensateUpdateQueueEncounterRequest)(nil),  // 3: simrs.CompensateUpdateQueueEncounterRequest
	(*GetPatientsResponse)(nil),                    // 4: simrs.GetPatientsResponse
	(*GetEncounterDetailsResponse)(nil),            // 5: simrs.GetEncounterDetailsResponse
	(*UpdateQueueResponse)(nil),                    // 6: simrs.UpdateQueueResponse
	(*CompensateUpdateQueueEncounterResponse)(nil), // 7: simrs.CompensateUpdateQueueEncounterResponse
}
var file_simrs_proto_depIdxs = []int32{
	0, // 0: simrs.PatientService.GetPatients:input_type -> simrs.GetPatientsRequest
	1, // 1: simrs.EncounterService.GetEncounterDetails:input_type -> simrs.GetEncounterDetailsRequest
	2, // 2: simrs.QueueService.UpdateQueue:input_type -> simrs.UpdateQueueRequest
	3, // 3: simrs.QueueService.CompensateUpdateQueueEncounter:input_type -> simrs.CompensateUpdateQueueEncounterRequest
	4, // 4: simrs.PatientService.GetPatients:output_type -> simrs.GetPatientsResponse
	5, // 5: simrs.EncounterService.GetEncounterDetails:output_type -> simrs.GetEncounterDetailsResponse
	6, // 6: simrs.QueueService.UpdateQueue:output_type -> simrs.UpdateQueueResponse
	7, // 7: simrs.QueueService.CompensateUpdateQueueEncounter:output_type -> simrs.CompensateUpdateQueueEncounterResponse
	4, // [4:8] is the sub-list for method output_type
	0, // [0:4] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_simrs_proto_init() }
func file_simrs_proto_init() {
	if File_simrs_proto != nil {
		return
	}
	file_encounter_proto_init()
	file_patient_proto_init()
	file_queue_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_simrs_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   3,
		},
		GoTypes:           file_simrs_proto_goTypes,
		DependencyIndexes: file_simrs_proto_depIdxs,
	}.Build()
	File_simrs_proto = out.File
	file_simrs_proto_rawDesc = nil
	file_simrs_proto_goTypes = nil
	file_simrs_proto_depIdxs = nil
}
