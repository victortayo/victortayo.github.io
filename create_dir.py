import os
directory_to_create = r'C:\Users\Sonola Titilope\Desktop\HO Guide\ho\src\pages\kb\general-stuff'
os.makedirs(directory_to_create, exist_ok=True)
print(f'Successfully created directory: {directory_to_create}')