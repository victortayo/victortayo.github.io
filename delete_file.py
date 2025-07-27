import os
file_to_delete = r'C:\Users\Sonola Titilope\Desktop\HO Guide\ho\src\pages\guide\obgyn\day-to-day-tasks.html'
if os.path.exists(file_to_delete):
    os.remove(file_to_delete)
    print(f'Successfully deleted {file_to_delete}')
else:
    print(f'File not found: {file_to_delete}')