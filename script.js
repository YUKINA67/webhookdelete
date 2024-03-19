document.addEventListener('DOMContentLoaded', () => {
    const deleteForm = document.getElementById('deleteForm');
    const response = document.getElementById('response');

    deleteForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const webhookURL = document.getElementById('webhookURL').value;

        try {
            const r = await fetch(webhookURL, {
                method: 'DELETE'
            });

            if (r.ok) {
                response.textContent = 'Webhookを削除しました。';
                response.className = 'success';
            } else {
                response.textContent = `Webhookの削除に失敗しました。ステータスコード: ${r.status}`;
                response.className = 'error';
            }
        } catch (error) {
            console.error('Webhookの削除中にエラーが発生しました:', error);
            response.textContent = 'エラーが発生しました。';
            response.className = 'error';
        }
    });
});
